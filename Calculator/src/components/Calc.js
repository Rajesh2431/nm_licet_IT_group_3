
import { useState } from "react";
import { Card, Button } from "react-bootstrap";

export default function Calc() {
  const [res, setRes] = useState("");
  const [expression, setExpression] = useState("");
  const [submit, setSubmit] = useState(false);
  const data = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "/",
    "*",
    "+",
    "-",
  ];

  async function handleCompute() {
    try {
      setRes(eval(expression));
    } catch (e) {
      setRes("Invalid Expression");
    }
    setSubmit(true);
  }
  async function clear() {
    setExpression("");
    setSubmit(false);
  }
  return (
    <>
      <div className="d-flex justify-content-center align-items-center">
        <Card>
          <Card.Header className="display-3">Calculator</Card.Header>
          <Card.Body>
            <Card.Text className="display-3">
              {submit ? res : expression == "" ? 0 : expression}
            </Card.Text>
            <div className="row">
              {data.map((d) => (
                <div className="col-4 w-100">
                  <Button
                    className="w-100 m-1"
                    variant="primary"
                    onClick={() =>
                      setExpression((prev) => {
                        return prev + d;
                      })
                    }
                  >
                    {d}
                  </Button>
                </div>
              ))}
            </div>
            <Button className="w-100 m-2" variant="danger" onClick={clear}>
              C
            </Button>
            <Button
              className="w-100 m-2"
              variant="primary"
              onClick={handleCompute}
            >
              =
            </Button>
          </Card.Body>
        </Card>
      </div>
    </>
  );
}

