// resources/js/components/Pagination.tsx
import { Link } from '@inertiajs/react';

type PaginationProps = {
    links: {
        url: string | null;
        label: string;
        active: boolean;
    }[];
};

const Pagination: React.FC<PaginationProps> = ({ links }) => (
    <div className="mt-8 flex flex-wrap space-x-2">
        {links.map((link, index) => (
            <span key={index}>
                {link.url ? (
                    <Link
                        href={link.url}
                        className={`rounded border px-3 py-1 text-sm ${
                            link.active ? 'bg-blue-600 text-white' : 'bg-white text-gray-700 hover:bg-gray-100'
                        }`}
                        dangerouslySetInnerHTML={{ __html: link.label }}
                    />
                ) : (
                    <span className="rounded border bg-gray-200 px-3 py-1 text-sm text-gray-500" dangerouslySetInnerHTML={{ __html: link.label }} />
                )}
            </span>
        ))}
    </div>
);

export default Pagination;
