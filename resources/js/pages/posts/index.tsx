import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import AppLayout from '@/layouts/app-layout';
import { faLocationDot, faWifi } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Head, Link, router, usePage } from '@inertiajs/react';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

// ユーザー名からイニシャルを取得する関数
function getInitials(name?: string): string {
    if (!name) return '';
    return name
        .split(' ')
        .map((n) => n[0])
        .join('')
        .toUpperCase();
}

interface Review {
    id: number;
    rating: number;
    comment: string;
    created_at: string;
}

interface Post {
    id: number;
    place: string;
    wifi_name: string;
    category?: { name: string };
    location: string;
    latitude: number;
    longitude: number;
    speed: number;
    description: string;
    user?: { id: number; name: string; avatar?: string };
    reviews?: Review[];
}

interface Category {
    id: number;
    name: string;
}

interface IndexProps {
    posts: {
        data: Post[];
        current_page: number;
        last_page: number;
        links: {
            url: string | null;
            label: string;
            active: boolean;
        }[];
    };
    categories: Category[];
    filters: {
        category_id?: string;
        search?: string;
    };
}

const RatingStars: React.FC<{ rating: number }> = ({ rating }) => {
    const stars = Array.from({ length: 5 }, (_, index) => (
        <span key={index} className={index < rating ? 'text-yellow-400' : 'text-gray-300'}>
            ★
        </span>
    ));
    return <span className="text-lg">{stars}</span>;
};

const Index: React.FC<IndexProps> = ({ posts, categories, filters }) => {
    const [searchTerm, setSearchTerm] = useState(filters.search || '');
    const [expandedPosts, setExpandedPosts] = useState<{ [key: number]: boolean }>({});
    const [displayedPosts, setDisplayedPosts] = useState<Post[]>(posts.data);

    // Safely access auth from usePage().props inside the component
    const auth = (usePage().props as { auth?: { user: { id: number; name: string } } }).auth;

    // 検索（API経由、非ページ遷移）
    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await axios.get('/api/posts', {
                    params: {
                        search: searchTerm,
                        category_id: filters.category_id,
                    },
                });
                setDisplayedPosts(response.data.data);
            } catch (err) {
                console.error(err);
            }
        };
        fetchPosts();
    }, [searchTerm, filters.category_id]);
    const toggleReviews = (postId: number) => {
        setExpandedPosts((prev) => ({
            ...prev,
            [postId]: !prev[postId],
        }));
    };

    const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const selected = e.target.value;
        // カテゴリー変更後、URLを更新
        router.get('/posts', { category_id: selected, search: searchTerm }, { preserveScroll: true });
    };

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // 検索条件を元にURLを更新
        router.get('/posts', { category_id: filters.category_id, search: searchTerm }, { preserveScroll: true });
    };

    const handlePaginationClick = (url: string | null) => {
        if (url) {
            router.visit(url, { preserveScroll: true });
        }
    };

    return (
        <AppLayout>
            <Head title="WiFi Posts" />
            <div className="p-6">
                <h1 className="mb-4 text-2xl font-bold">
                    <FontAwesomeIcon icon={faLocationDot} /> All WiFi Posts
                </h1>

                {/* 検索フォーム */}
                <form onSubmit={handleSubmit} className="mb-4">
                    <input
                        type="text"
                        value={searchTerm}
                        onChange={handleSearchChange}
                        placeholder="Search by place or WiFi name"
                        className="w-full border p-2"
                    />
                </form>

                {/* カテゴリー選択 */}
                <select value={filters.category_id || ''} onChange={handleCategoryChange} className="mb-4 w-full border p-2">
                    <option value="">All category</option>
                    {categories.map((category) => (
                        <option key={category.id} value={category.id}>
                            {category.name}
                        </option>
                    ))}
                </select>

                {/* 投稿リスト */}
                {displayedPosts.map((post) => (
                    <div key={post.id} className="mb-4 rounded border p-4 shadow">
                        <div className="my-1 flex items-center space-x-3">
                            <Avatar className="h-8 w-8 overflow-hidden rounded-full">
                                <AvatarImage src={post.user?.avatar} alt={post.user?.name || ''} />
                                <AvatarFallback className="rounded-lg bg-neutral-200 text-black dark:bg-neutral-700 dark:text-white">
                                    {getInitials(post.user?.name)}
                                </AvatarFallback>
                            </Avatar>
                            <span className="text-sm font-medium">{post.user?.name}</span>
                        </div>
                        <h2 className="text-xl font-semibold">
                            {post.place} - <FontAwesomeIcon icon={faWifi} /> {post.wifi_name}
                        </h2>
                        <p>
                            <strong>Category:</strong> {post.category?.name}
                        </p>
                        {post.speed !== null && post.speed !== undefined && (
                            <p>
                                <strong>Speed:</strong> {post.speed} Mbps
                            </p>
                        )}
                        {post.description && (
                            <p>
                                <strong>Description:</strong> {post.description}
                            </p>
                        )}
                        <p>
                            <a
                                href={`https://www.google.com/maps?q=${post.latitude},${post.longitude}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-600 hover:underline"
                            >
                                <FontAwesomeIcon icon={faLocationDot} /> {post.place}
                            </a>
                        </p>

                        {/* レビュー */}
                        {post.reviews?.length ? (
                            <>
                                <p className="mt-2 mb-1">
                                    <strong>Average rate:</strong>{' '}
                                    <RatingStars rating={Math.round(post.reviews.reduce((sum, r) => sum + r.rating, 0) / post.reviews.length)} />
                                    <span className="ml-1 text-sm text-gray-500">({post.reviews.length}reviews)</span>
                                </p>

                                <ul>
                                    {(expandedPosts[post.id]
                                        ? [...post.reviews].sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime())
                                        : [[...post.reviews].sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime())[0]]
                                    ).map((r) =>
                                        r ? (
                                            <li key={r.id}>
                                                <RatingStars rating={r.rating} /> - {r.comment}
                                            </li>
                                        ) : null,
                                    )}
                                </ul>
                                <div className="mt-4 flex flex-col items-start space-y-2">
                                    {post.reviews.length > 1 && (
                                        <button onClick={() => toggleReviews(post.id)} className="text-sm text-blue-600 hover:underline">
                                            {expandedPosts[post.id] ? 'Hide reviews' : `Show all reviews (${post.reviews.length})`}
                                        </button>
                                    )}

                                    {auth?.user && post.user?.id !== auth.user.id && (
                                        <Link
                                            href={`/posts/${post.id}/reviews/create`}
                                            className="inline-block rounded bg-green-500 px-4 py-2 text-white hover:bg-green-600"
                                        >
                                            Add Review
                                        </Link>
                                    )}
                                </div>
                            </>
                        ) : (
                            <p className="text-gray-500">No reviews yet.</p>
                        )}
                    </div>
                ))}

                {/* ページネーション */}
                <div className="mt-6 flex flex-wrap gap-2">
                    {posts.links.map((link, index) => (
                        <button
                            key={index}
                            disabled={!link.url}
                            onClick={() => handlePaginationClick(link.url)}
                            className={`rounded border px-3 py-1 ${link.active ? 'bg-blue-500 text-white' : 'bg-white text-blue-500'} ${
                                !link.url ? 'cursor-not-allowed opacity-50' : ''
                            }`}
                            dangerouslySetInnerHTML={{ __html: link.label }}
                        />
                    ))}
                </div>
            </div>
        </AppLayout>
    );
};

export default Index;
