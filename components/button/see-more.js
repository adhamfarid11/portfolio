function SeeMore(props) {
    return (
        <>
            <button className="see-more" onClick={() => props.function}>
                <p>See</p>
                <p>More</p>
            </button>
        </>
    );
}

export default SeeMore;
