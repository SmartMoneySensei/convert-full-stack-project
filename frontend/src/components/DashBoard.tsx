import React, { useEffect, useState} from "react";
import { Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  
  let navigate = useNavigate()

  // Find ALL bugs
  const [totalBugs, setTotalBugs] = useState([]);
  const [highBugs, setHighBugs] = useState([]);
  const [mediumBugs, setMediumBugs] = useState([]);
  const [lowBugs, setLowBugs] = useState([]);

  useEffect(() => {
  const fetchTotalBugs = async () => {
      try {
        const data = await fetch("/bugs");
        const json = await data.json();
        setTotalBugs(json)
      } catch(err){console.log(err)}
  }
  fetchTotalBugs();
  }, []);

  // Find all HIGH PRIORITY bugs
  useEffect(() => {
    const fetchHighBugs = async () => {
        try {
          const data = await fetch("/bugs/high");
          const json = await data.json();
          setHighBugs(json)
        } catch(err){console.log(err)}
    }
    fetchHighBugs();
    }, []);

  // Find all MEDIUM PRIORITY bugs
  useEffect(() => {
    const fetchMediumBugs = async () => {
        try {
          const data = await fetch("/bugs/medium");
          const json = await data.json();
          setMediumBugs(json)
        } catch(err){console.log(err)}
    }
    fetchMediumBugs();
    }, []);

  // Find all LOW PRIORITY bugs
  useEffect(() => {
    const fetchLowBugs = async () => {
        try {
          const data = await fetch("/bugs/low");
          const json = await data.json();
          setLowBugs(json)
        } catch(err){console.log(err)}
    }
    fetchLowBugs();
    }, []);

  // Calculate bugs
  const showBugs = (a:any) => {
    let total = 0;
    if (a === "total") {
      totalBugs.forEach(() => {
        total++
      })
    } else if (a === "high") {
      highBugs.forEach(() => {
        total++
      })
    } else if (a === "medium") {
      mediumBugs.forEach(() => {
        total++
      })
    } else if (a === "low") {
      lowBugs.forEach(() => {
        total++
      })
    }
    return total
  }

  return (
    <div>
      <h1 className="page-header">Overview</h1>

      <div className="bug-cards">
        <Card style={{ width: "40rem", height: "40rem", margin: "10px" }}>
          <Card.Header>Total Bugs</Card.Header>
          <Card.Body>
            <Card.Text style={{ fontSize: "96px", textAlign: "center" }}>
              {showBugs("total")}
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <div className="d-grid gap-2">
              <Button variant="primary" size="lg" onClick={() => navigate('/bugs/')}>
                View Bugs
              </Button>
            </div>
          </Card.Footer>
        </Card>

        <Card style={{ width: "40rem", height: "40rem", margin: "10px" }}>
          <Card.Header>Total High Priority Bugs</Card.Header>
          <Card.Body>
            <Card.Text style={{ fontSize: "96px", textAlign: "center" }}>
            {showBugs("high")}
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <div className="d-grid gap-2">
              <Button variant="primary" size="lg" onClick={() => navigate('/bugs/')}>
                View Bugs
              </Button>
            </div>
          </Card.Footer>
        </Card>

        <Card style={{ width: "40rem", height: "40rem", margin: "10px" }}>
          <Card.Header>Total Medium Priority Bugs</Card.Header>
          <Card.Body>
            <Card.Text style={{ fontSize: "96px", textAlign: "center" }}>
            {showBugs("medium")}
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <div className="d-grid gap-2">
              <Button variant="primary" size="lg" onClick={() => navigate('/bugs/')}>
                View Bugs
              </Button>
            </div>
          </Card.Footer>
        </Card>

        <Card style={{ width: "40rem", height: "40rem", margin: "10px" }}>
          <Card.Header>Total Low Priority Bugs</Card.Header>
          <Card.Body>
            <Card.Text style={{ fontSize: "96px", textAlign: "center" }}>
            {showBugs("low")}
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <div className="d-grid gap-2">
              <Button variant="primary" size="lg" onClick={() => navigate('/bugs/')}>
                View Bugs
              </Button>
            </div>
          </Card.Footer>
        </Card>
      </div>
    </div>
  );
}