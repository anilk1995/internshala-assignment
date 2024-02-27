import Cards from "./Cards";

function RelatedItems() {
  return (
    <div className="d-flex flex-column width-1024 mx-auto container  padded text-white mt-page">
      <h3 className="suggestion-heading">Related deals you might like for</h3>
      <Cards />
    </div>
  );
}

export default RelatedItems;
