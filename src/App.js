import React, { useState } from "react"
import { Button } from "./components/Button/Button"
import { ButtonContainer } from "./components/ButtonContainer/ButtonContainer"
import { Container } from "./components/Container/Container"
import { Screen } from "./components/Screen/Screen"

const btnValues = [
  ["C", "+-", "%", "/"],
  [7, 8, 9, "X"],
  [4, 5, 6, "-"],
  [1, 2, 3, "+"],
  [0, ".", "="],
]

const App = () => {
  let [calc, setCalc] = useState({
    sign: "",
    num: 0,
    res: 0,
  })

  const numClickHandler = (e) => {
    e.preventDefault()
    console.log("numclickhandler")
  }

  const resetClickHandler = (e) => {
    e.preventDefault()
    console.log("resetClickHandler")
  }

  const invertClickHandler = (e) => {
    e.preventDefault()
    console.log("invertClickHandler")
  }

  const percentClickHandler = (e) => {
    e.preventDefault()
    console.log("percentClickHandler")
  }

  const equalsClickHandler = (e) => {
    e.preventDefault()
    console.log("equalsClickHandler")
  }

  const signClickHandler = (e) => {
    e.preventDefault()
    console.log("signClickHandler")
  }

  const decimalClickHandler = (e) => {
    e.preventDefault()
    console.log("decimalClickHandler")
  }

  return (
    <div className="App">
      <header className="App-header">
        <Container>
          <Screen value={calc.num ? calc.num : calc.res} />
          <ButtonContainer>
            {btnValues.flat().map((btn, i) => {
              return (
                <Button
                  key={i}
                  className={btn === "=" ? "equals" : ""}
                  value={btn}
                  onClick={
                    btn === "C"
                      ? resetClickHandler
                      : btn === "+-"
                      ? invertClickHandler
                      : btn === "%"
                      ? percentClickHandler
                      : btn === "="
                      ? equalsClickHandler
                      : btn === "/" || btn === "X" || btn === "+" || btn === "-"
                      ? signClickHandler
                      : btn === "."
                      ? decimalClickHandler
                      : numClickHandler
                  }
                />
              )
            })}
          </ButtonContainer>
        </Container>
      </header>
    </div>
  )
}

export default App
