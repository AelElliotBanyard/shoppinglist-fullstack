import Link from 'next/link';

const ListItem = ({
    id,
    group_id,
    title,
    completed
}
) => {
    return (
        <>
            <Link className='listItem' href={`/${group_id}/item/${id}`}>
                {title}
            </Link>
            
        </>
    );
};

export default ListItem;