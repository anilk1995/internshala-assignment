function BestValueLabel({ rating }) {
  if (rating < 5) return;
  return (
    <div className="bestseller">
      {rating > 9.5 && (
        <>
          <svg
            className="label-svg"
            width="1592"
            height="2347"
            viewBox="0 0 1592 2347"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 0H1592V2347H0V0Z" fill="#FBFCFD" />
          </svg>
          <label className="font-s">Best Choice</label>
        </>
      )}
      {rating < 9.5 && (
        <>
          <svg
            className="label-svg"
            width="1592"
            height="2347"
            viewBox="0 0 1592 2347"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 0H1592V2347H0V0Z" fill="#FBFCFD" />
          </svg>
          <label className="font-s">Best Value</label>
        </>
      )}
    </div>
  );
}

export default BestValueLabel;
