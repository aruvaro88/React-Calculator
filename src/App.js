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
  [0,".","="],
]

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Container>
          <Screen value="0" />
          <ButtonContainer>
            {
              btnValues.flat().map((btn, i) => {
                return (
                  <Button
                    key={i}
                    className={btn === "=" ? "equals" : ""}
                    value={btn}
                    onClick={() => {
                    console.log(`${btn} clicked`)
                  }}/>
                )
              })
            }
          </ButtonContainer>
        </Container>
      </header>
    </div>
  )
}

export default App
