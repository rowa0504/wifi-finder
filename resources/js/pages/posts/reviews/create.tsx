import AppLayout from '@/layouts/app-layout';
import { Head, useForm } from '@inertiajs/react';
import React from 'react';

interface Post {
    id: number;
    place: string;
    wifi_name: string;
}

interface Props {
    post: Post;
}

const Create: React.FC<Props> = ({ post }) => {
    const {
        data,
        setData,
        post: submit,
        processing,
        errors,
    } = useForm({
        rating: 5,
        comment: '',
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        submit(route('reviews.store', post.id));
    };

    // 星表示・クリックコンポーネント
    const RatingStars: React.FC<{ rating: number; onRate?: (rating: number) => void }> = ({ rating, onRate }) => {
        const stars = Array.from({ length: 5 }, (_, index) => {
            const starValue = index + 1;
            return (
                <span
                    key={index}
                    onClick={() => onRate && onRate(starValue)}
                    className={`cursor-pointer text-2xl transition-colors ${starValue <= rating ? 'text-yellow-400' : 'text-gray-300'}`}
                >
                    ★
                </span>
            );
        });

        return <div className="flex gap-1">{stars}</div>;
    };

    return (
        <AppLayout>
            <Head title="Add Review" />
            <div className="mx-auto max-w-2xl p-6">
                <div className="rounded-2xl bg-white p-6 shadow">
                    <h1 className="mb-6 text-2xl font-bold text-gray-800">
                        Rate: <span className="text-blue-600">{post.place}</span> - {post.wifi_name}
                    </h1>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label className="mb-2 block font-medium text-gray-700">Rating</label>
                            <RatingStars rating={data.rating} onRate={(r) => setData('rating', r)} />
                            {errors.rating && <p className="mt-1 text-sm text-red-500">{errors.rating}</p>}
                        </div>

                        <div>
                            <label className="mb-2 block font-medium text-gray-700">Comment</label>
                            <textarea
                                value={data.comment}
                                onChange={(e) => setData('comment', e.target.value)}
                                className="h-32 w-full resize-none rounded-lg border-gray-300 p-3 shadow-sm focus:ring focus:ring-blue-300"
                            />
                            {errors.comment && <p className="mt-1 text-sm text-red-500">{errors.comment}</p>}
                        </div>

                        <div>
                            <button
                                type="submit"
                                disabled={processing}
                                className="w-full rounded-lg bg-blue-600 py-3 font-semibold text-white shadow transition-colors hover:bg-blue-700"
                            >
                                Add Review
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </AppLayout>
    );
};

export default Create;
