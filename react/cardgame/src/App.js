import React, { ReactDOM } from "react";
import "./App.css";

function randomSort(a, b) {
  return 0.5 - Math.random();
}

export default function App() {
  constructor(props); {
    super(props);
    let val = ["noto:bird", "noto:blossom", "noto:cactus", "noto:avocado", "noto:cookie", "noto:crystal-ball", "noto:peach", "noto:gorilla"];
    val = val.concat(val).sort(randomSort);
    this.state = {
      cards: [...Array(16).keys()].map(n => false),
      values: val,
      selected: [],
      hits: 0
    };
  }
  
  clickHandler(key); {
    let newCards = [...this.state.cards];
    let newSelected = [...this.state.selected];
    let newHits = this.state.hits;
    if(newSelected.length > 1) {
      newHits++;
      newCards[newSelected[0]] = false;
      newCards[newSelected[1]] = false;
      newSelected = [];
    }
    newCards[key] = true;
    newSelected.push(key);
    if(newSelected.length > 1 && 
       this.state.values[newSelected[0]] == this.state.values[newSelected[1]]
      ) {
      newSelected = [];
    }
    this.setState({cards: newCards, 
                   selected: newSelected, 
                   hits: newHits});
  }
  
  render(); {
    const cards = [...Array(this.state.cards.length).keys()]
      .map(n => (<Card 
                   key={n} 
                   value={this.state.values[n]}
                   active={this.state.cards[n]}
                   clicked={() => this.clickHandler(n)} />));
    return(
      <>
        <h1>Memory Game</h1>
        <div className="Board">{cards}</div>
        <p>Hits: {this.state.hits}</p>
      </>
    );
  }
}

// import "./App.css";
// import React, {ReactDOM} from 'react';

// const { useState, useRef, useEffect, useLayoutEffect, createContext } = React;

// function randomize() {
// 	let randomList = ["1", "2", "3", "4", "1", "2", "3", "4", "X"];
// 	let indexLength = randomList.length;
// 	let randomLength = indexLength;
// 	let newRandomList = [];
// 	for (let i = 0; i < indexLength; i++) {
// 		let randomIndex = Math.floor(Math.random() * randomLength);
// 		randomLength = randomLength - 1;
// 		let returned = randomList.splice(randomIndex, 1)[0];
// 		newRandomList.push(returned);
// 	}

// 	return newRandomList;
// }
// function Items({ items_p, onItemClick, game_p }) {
// 	let items = items_p.map((item) => {
// 		let green_class = item.isOpened ? "green" : "blue";
// 		let red_class = item.value == "X" && item.isOpened ? "red" : "blue";

// 		return (
// 			<div
// 				className={`item pointer ${green_class} ${red_class}`}
// 				key={item.index}
// 				onClick={() => onItemClick(item.index, item, game_p)}
// 			>
// 				{item.isOpened ? item.value : "?"}
// 			</div>
// 		);
// 	});
// 	return <div className="container">{items}</div>;
// }

// let openedItems = [];
// let itemCheckCoupledCache = [];
// let reFreshEffectCounter = 0;
// function reStart() {
// 	const stateValue = randomize().map((item, index) => {
// 		return { index: index, value: item[0], isOpened: false };

// 	});
// 	return stateValue;
// }

// function App(props) {
// 	const [itemState, setItemState] = useState(reStart());
// 	const [gameState, setGameState] = useState("ongoing");

// 	function reFresh() {
// 		reFreshEffectCounter++;
// 		itemCheckCoupledCache = [];
// 		openedItems = [];
// 		setGameState("ongoing");
// 	}
// 	function goBackToBlue() {
// 		if (gameState === "lose") return;
// 		setItemState((prev) => {
// 			let openedItem1 = itemCheckCoupledCache[0];
// 			let openedItem2 = itemCheckCoupledCache[1];

// 			prev[openedItem1.index].isOpened = false;
// 			prev[openedItem2.index].isOpened = false;
// 			itemCheckCoupledCache = [];
// 			return [...prev];
// 		});
// 	}
// 	useEffect(() => {
// 		console.log("opened item legnth, inside effect : " + openedItems.length);
// 		if (openedItems.length == 8) {
// 			console.log("kazandın");
// 			setGameState("win");
// 		}
// 	}, [openedItems.length]);

// 	useEffect(() => {
// 		setItemState(reStart());
// 	}, [reFreshEffectCounter]);

// 	useEffect(() => {
// 		let cacheLength = itemCheckCoupledCache.length;
// 		if (cacheLength === 0 || cacheLength === 1) {
// 			return;
// 		} else if (itemCheckCoupledCache.length === 2) {
// 			if (itemCheckCoupledCache[0].value === itemCheckCoupledCache[1].value) {
// 				openedItems = [...openedItems, ...itemCheckCoupledCache];
// 				itemCheckCoupledCache = [];
// 			} else {
// 				if (gameState === "ongoing") setTimeout(goBackToBlue, 1000);
// 			}
// 		}
// 	}, [itemCheckCoupledCache.length]);

// 	useEffect(() => {
// 		let cacheLength = itemCheckCoupledCache.length;
// 		let openedItemLength = openedItems.length;

// 		if (cacheLength === 0) {
// 			return;
// 		}

// 		let theLastItem = itemCheckCoupledCache[cacheLength - 1];

// 		if (theLastItem.value == "X") {
// 			if (openedItems.length == 8) {
// 				console.log("kazandin");
// 				setGameState("win");
// 			} else {
// 				setGameState("lose");
// 			}
// 		}
// 	}, [itemState]);

// 	function handleItemClick(index, item, game) {
// 		let isX = game === "lose" ? true : false;

// 		console.log(itemState);
// 		console.log(gameState);
// 		if (itemCheckCoupledCache.length === 2 || isX) {
// 			return;
// 		}

// 		if (item.isOpened == false) {
// 			item.isOpened = true;
// 			itemCheckCoupledCache.push(item);

// 			setItemState((prev) => {
// 				prev[index] = item;
// 				return [...prev];
// 			});
// 		}
// 	}

// 	let buttonText = "";
// 	let headerText = "";

// 	if (gameState == "ongoing") {
// 		buttonText = "Refresh";
// 		headerText = "Find all couples without opening the item X";
// 	}
// 	if (gameState == "lose") {
// 		buttonText = "Start again";
// 		headerText = "You lose...";
// 	}
// 	if (gameState == "win") {
// 		buttonText = "Start again";
// 		headerText = "You win...";
// 	}

// 	return (
// 		<div className="main-div">
// 			<div className="button pointer" onClick={reFresh}>
// 				{buttonText}
// 			</div>
// 			<h1 className="last"> {headerText}</h1>
// 			<Items
// 				items_p={itemState}
// 				game_p={gameState}
// 				onItemClick={handleItemClick}
// 			/>
// 		</div>
// 	);
// }
// const root = ReactDOM.createRoot(document.querySelector("#root"));
// root.render(<App />);
