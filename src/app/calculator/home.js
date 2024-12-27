"use client"; // Indicating the component is client-side only

import { useState } from "react";
import { Button } from "../../component/ui/Button";
import { Card, CardContent, CardHeader, CardTitle } from "../../component/card";

const Calculator = () => {
  const [display, setDisplay] = useState("0");
  const [equation, setEquation] = useState("");
  const [isNewNumber, setIsNewNumber] = useState(true);

  const handleNumber = (number) => {
    if (isNewNumber) {
      setDisplay(number);
      setIsNewNumber(false);
    } else {
      setDisplay(display + number);
    }
  };

  const handleOperator = (operator) => {
    setEquation(display + " " + operator + " ");
    setIsNewNumber(true);
  };

  const handleEqual = () => {
    try {
      const result = eval(equation + display);
      setDisplay(result.toString());
      setEquation("");
      setIsNewNumber(true);
    } catch (error) {
      setDisplay("Error");
      setEquation("");
      setIsNewNumber(true);
    }
  };

  const handleClear = () => {
    setDisplay("0");
    setEquation("");
    setIsNewNumber(true);
  };

  const handleDecimal = () => {
    if (!display.includes(".")) {
      setDisplay(display + ".");
      setIsNewNumber(false);
    }
  };

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle className="text-center">Calculator</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="bg-gray-100 p-4 rounded-lg">
            <div className="text-gray-500 text-sm h-6">{equation}</div>
            <div className="text-3xl font-semibold text-right">{display}</div>
          </div>

          <div className="grid grid-cols-4 gap-2">
            <Button variant="outline" className="p-4" onClick={handleClear}>
              C
            </Button>
            <Button
              variant="outline"
              className="p-4"
              onClick={() => handleOperator("/")}
            >
              ÷
            </Button>
            <Button
              variant="outline"
              className="p-4"
              onClick={() => handleOperator("*")}
            >
              ×
            </Button>
            <Button
              variant="outline"
              className="p-4"
              onClick={() => handleOperator("-")}
            >
              -
            </Button>

            {[7, 8, 9].map((num) => (
              <Button
                key={num}
                variant="outline"
                className="p-4"
                onClick={() => handleNumber(num.toString())}
              >
                {num}
              </Button>
            ))}
            <Button
              variant="outline"
              className="p-4"
              onClick={() => handleOperator("+")}
            >
              +
            </Button>

            {[4, 5, 6].map((num) => (
              <Button
                key={num}
                variant="outline"
                className="p-4"
                onClick={() => handleNumber(num.toString())}
              >
                {num}
              </Button>
            ))}
            <Button
              variant="outline"
              className="p-4 row-span-2"
              onClick={handleEqual}
            >
              =
            </Button>

            {[1, 2, 3].map((num) => (
              <Button
                key={num}
                variant="outline"
                className="p-4"
                onClick={() => handleNumber(num.toString())}
              >
                {num}
              </Button>
            ))}

            <Button
              variant="outline"
              className="p-4 col-span-2"
              onClick={() => handleNumber("0")}
            >
              0
            </Button>
            <Button variant="outline" className="p-4" onClick={handleDecimal}>
              .
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default Calculator;
