import Link from 'next/link';

const listItem = ({
    id,
    group_id,
    title,
}
) => {
    return (
        <div>
            <Link href={`/${group_id}/item/${id}`}>{title}</Link>
            <h1>{title}</h1>
            
        </div>
    );
};

export default listItem;