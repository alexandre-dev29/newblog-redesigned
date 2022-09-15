export function YouTubeComp({ id }: { id: string }) {
  return (
    <div className={"youtube_container"}>
      <iframe
        src={`https://www.youtube.com/embed/${id}`}
        allow="autoplay; encrypted-media"
        title="Embedded YouTube video"
        className={"youtube_frame"}
      />
    </div>
  );
}
