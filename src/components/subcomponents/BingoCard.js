import React from 'react';

class BingoCard extends React.Component {
  
  render(){
    let card = this.props.card;
    return(
      <div>
        <div className="row">
          {Object.keys(card).map((column, i) => (
              <div className="col" key={"card" + column + '-' + i}>
                <div className="card-numbers">
                  {Object.values(card[column]).map((number, index) => (
                    <div className="card-number" key={column + '-' + index}>
                      <span>{number}</span>
                    </div>
                  ))}
                </div>
              </div>
            )
          )}
        </div>
      </div>
    )
  }

}
export default BingoCard;