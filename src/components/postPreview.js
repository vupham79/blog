import React from "react"
import { Link } from "gatsby"
import "./layout.css"

const PostPreview = data => {
  return (
    <div style={{ marginBottom: `10px` }}>
      <h2 className={`title`}>{data.title}</h2>
      <time className={`date`} dateTime={data.date}>
        {data.date}
      </time>
      <p className={`excerpt`}>{data.excerpt}</p>
      <Link to={data.slug} className={`btn btn-read`}>
        Read
      </Link>
    </div>
  )
}

export default PostPreview
