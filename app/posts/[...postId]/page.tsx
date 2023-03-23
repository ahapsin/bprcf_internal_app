export const metadata = {
    title : 'detail post'
}

const PostDetail = ({params}:{params:{postId: string}}) => {
    return ( <div>post detail {params.postId[0]}</div> );
}
 
export default PostDetail;