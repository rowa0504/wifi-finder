import AppLayout from '@/layouts/app-layout';
import { faArrowLeft, faComments } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Head, Link, usePage } from '@inertiajs/react';
import React from 'react';
import Pagination from '@/components/pagination';

type Review = {
    id: number;
    rating: number;
    comment: string;
    created_at: string;
    post: {
        place: string;
    };
};

type PaginatedReviews = {
    data: Review[];
    links: {
        url: string | null;
        label: string;
        active: boolean;
    }[];
};

const StarRating: React.FC<{ rating: number }> = ({ rating }) => (
    <span className="text-lg">
        {Array.from({ length: 5 }).map((_, i) => (
            <span key={i} className={i < rating ? 'text-yellow-400' : 'text-gray-300'}>
                ★
            </span>
        ))}
    </span>
);

const MyReviews: React.FC = () => {
    const { reviews } = usePage().props as unknown as { reviews: PaginatedReviews };

    return (
        <AppLayout>
            <Head title="My Reviews" />
            <div className="p-6">
                <h1 className="mb-4 text-2xl font-bold">
                    <FontAwesomeIcon icon={faComments} /> My Reviews
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

                {reviews.data.length === 0 ? (
                    <p className="text-gray-500">You haven't written any reviews yet.</p>
                ) : (
                    <ul className="space-y-6">
                        {reviews.data.map((review) => (
                            <li key={review.id} className="rounded border bg-white p-4 shadow">
                                <div className="mb-2 flex justify-between">
                                    <h2 className="text-xl font-semibold">{review.post.place}</h2>
                                    <span className="text-sm text-gray-500">{new Date(review.created_at).toLocaleDateString()}</span>
                                </div>
                                <StarRating rating={review.rating} />
                                <p className="mt-2 text-gray-700">{review.comment}</p>
                            </li>
                        ))}
                    </ul>
                )}

                {/* ページネーション */}
                <Pagination links={reviews.links} />
            </div>
        </AppLayout>
    );
};

export default MyReviews;
