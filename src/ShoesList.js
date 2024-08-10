function ShoesList(props) {
    return (
        <div className="row">
            {props.shoes.map(function (a, i) {
                return (
                    <div className="col-md-4" key={i}>
                        <img src={'https://codingapple1.github.io/shop/shoes' + [i + 1] + '.jpg'} alt="" width="80%" />
                        <h4>{props.shoes[i].title}</h4>
                        <p>{props.shoes[i].price}</p>
                    </div>
                );
            })}
        </div>
    );
}

export default ShoesList;
