import CreatePostProvider from '../Provider/CreatePostProvider'
import EditBlog from '../pages/EditBlog'

const EditBlogWithProvider = () => {
  
  return (
    <>
      <CreatePostProvider>
        <EditBlog />
      </CreatePostProvider>
    </>
  )
}

export default EditBlogWithProvider
