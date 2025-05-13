import Pagination from '@/components/pagination';
import AppLayout from '@/layouts/app-layout';
import { faLocationDot, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Head, Link } from '@inertiajs/react';
import React, { useState } from 'react';

type Post = {
    id: number;
    place: string;
    wifi_name: string;
    category: { name: string };
    speed: number;
    description: string;
    user: { name: string };
    latitude: number;
    longitude: number;
    reviews: { id: number; rating: number; comment: string; created_at: string }[];
    links: { url: string | null; label: string; active: boolean }[];
};

type MyPostsProps = {
    posts: {
        data: Post[];
        links: {
            url: string | null;
            label: string;
            active: boolean;
        }[];
    };
};

const RatingStars: React.FC<{ rating: number }> = ({ rating }) => (
    <span className="text-lg">
        {Array.from({ length: 5 }).map((_, i) => (
            <span key={i} className={i < rating ? 'text-yellow-400' : 'text-gray-300'}>
                ★
            </span>
        ))}
    </span>
);

const MyPosts: React.FC<MyPostsProps> = ({ posts }) => {
    const [expandedPosts, setExpandedPosts] = useState<{ [key: number]: boolean }>({});

    const toggleReviews = (postId: number) => {
        setExpandedPosts((prev) => ({
            ...prev,
            [postId]: !prev[postId],
        }));
    };

    return (
        <AppLayout>
            <Head title="My Wi-Fi Posts" />
            <div className="p-6">
                <h1 className="mb-4 text-2xl font-bold">
                    <FontAwesomeIcon icon={faLocationDot} /> My Wi-Fi Posts
                </h1>

                <div className="mb-6">
                    <button
                        onClick={() => window.history.back()}
                        className="inline-flex items-center rounded bg-gray-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
                    >
                        <FontAwesomeIcon icon={faArrowLeft} className="mr-2" />
                        Back
                    </button>
                </div>

                {posts.data.map((post) => (
                    <div key={post.id} className="mb-4 rounded border p-4 shadow">
                        <h2 className="text-xl font-semibold">
                            {post.place} - {post.wifi_name}
                        </h2>
                        <p>
                            <strong>Category:</strong> {post.category?.name}
                        </p>
                        <p>
                            <strong>Speed:</strong> {post.speed} Mbps
                        </p>
                        <p>
                            <strong>Description:</strong> {post.description}
                        </p>
                        <p>
                            <strong>User:</strong> {post.user?.name}
                        </p>
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
                                    <span className="ml-1 text-sm text-gray-500">({post.reviews.length} reviews)</span>
                                </p>
                                <ul>
                                    {(expandedPosts[post.id]
                                        ? post.reviews.sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime())
                                        : [post.reviews[0]]
                                    ).map((r) => (
                                        <li key={r.id}>
                                            <RatingStars rating={r.rating} /> - {r.comment}
                                        </li>
                                    ))}
                                </ul>
                                <div className="mt-4">
                                    {post.reviews.length > 1 && (
                                        <button onClick={() => toggleReviews(post.id)} className="text-sm text-blue-600 hover:underline">
                                            {expandedPosts[post.id] ? 'Hide reviews' : `Show all reviews (${post.reviews.length})`}
                                        </button>
                                    )}
                                    <Link
                                        href={`/posts/${post.id}/reviews/create`}
                                        className="inline-block rounded bg-green-500 px-4 py-2 text-white hover:bg-green-600"
                                    >
                                        Add Review
                                    </Link>
                                </div>
                            </>
                        ) : (
                            <p className="text-gray-500">No reviews yet.</p>
                        )}
                    </div>
                ))}

                {/* ページネーション */}
                <Pagination links={posts.links} />
            </div>
        </AppLayout>
    );
};

export default MyPosts;
