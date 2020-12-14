const App = () => {
    return (
        <div>
            <Person 
                name="Homer"
                age={37}
                hobbies = {["bowling", "drinking beer", "strangling Bart"]}
            />
            <Person 
                name="Marge"
                age={35}
                hobbies = {["painting", "gardening"]}
            />
            <Person 
                name="Bart"
                age={10}
                hobbies = {["skateboarding", "prank calls"]}
            />
        </div>
    )
}