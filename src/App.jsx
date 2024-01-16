import React, { useReducer } from "react";
import "./App.css";
function reducer(state, action) {
  switch (action.type) {
    case "revolver":
      return {
        balance: state.balance + 299,
        totalrevolver: state.totalrevolver + 1,
        totalak: state.totalak,
      };
    case "ak":
      return {
        balance: state.balance + 999,
        totalak: state.totalak + 1,
        totalrevolver: state.totalrevolver,
      };
    case "awp":
      return { balance: state.balance + 11999 };
  }

  return state;
}
const initialstate = {
  balance: 0,
  totalrevolver: 0,
  totalak: 0,
};
const App = () => {
  const [state, dispatch] = useReducer(reducer, initialstate);

  function handlerrevolver() {
    dispatch({ type: "revolvermarket", payload: revolver });
    const revolver = [
      {
        src: "https://avatars.mds.yandex.net/i?id=5ce479150e5eb0ba6afd3a7716ab0b0a4716c952-4507718-images-thumbs&n=13",
        name: "револьвер",
        price: 299,
      },
      {
        src: "https://avatars.mds.yandex.net/i?id=5ce479150e5eb0ba6afd3a7716ab0b0a4716c952-4507718-images-thumbs&n=13",
        name: "револьвер",
        price: 299,
      },
      {
        src: "https://avatars.mds.yandex.net/i?id=5ce479150e5eb0ba6afd3a7716ab0b0a4716c952-4507718-images-thumbs&n=13",
        name: "револьвер",
        price: 299,
      },
    ];
  }
  return (
    <>
      <header>
        <div>
          <h1>GUN MARKET</h1>
        </div>
        <div className="headerdiv">
          <img src="https://avatars.mds.yandex.net/i?id=5ce479150e5eb0ba6afd3a7716ab0b0a4716c952-4507718-images-thumbs&n=13" />
          <h2>РЕВОЛЬВЕР</h2>
          <h3>299$</h3>
          <button onClick={handlerrevolver}>ДОБАВИТЬ</button>
        </div>
        <div className="headerdiv">
          <img src="https://avatars.mds.yandex.net/i?id=d74ee794b84a1289bed24282752f758f6cd31262-8129946-images-thumbs&n=13" />
          <h2>КАЛАШНИКОВ</h2>
          <h3>999$</h3>
          <button>КУПИТЬ</button>
        </div>
        <div className="headerdiv">
          <img src="https://avatars.mds.yandex.net/i?id=85473cd3cca619dcb4d3a2cad4670f68eec25be6-9046334-images-thumbs&n=13" />
          <h2>КАЛАШНИКОВ</h2>
          <h3>11999$</h3>
          <button>КУПИТЬ</button>
        </div>
      </header>
      <main>
        <section>
          <h3>название</h3>
          <h3>стоимость</h3>
          <h3>количество</h3>
          <h3>удаление</h3>
        </section>
        {todos.map((item) => {
          return (
            <section>
              <img src={item.src}></img>
              <h3>{item.name}</h3>
              <h3>{item.price}</h3>
              <button>added</button>
            </section>
          );
        })}
        <section>
          <h1>TOTAL{state.balance}</h1>
        </section>
      </main>
    </>
  );
};

export default App;
