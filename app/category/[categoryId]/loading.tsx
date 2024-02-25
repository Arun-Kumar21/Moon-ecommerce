const Loading = () => {
  return (
    <div className="flex items-center justify-center z-10 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
      <div className="loader">
        <span className="loader-inner"></span>
      </div>
    </div>
  )
}

export default Loading;