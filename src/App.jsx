function App() {
    const fruits = [
        { id: 1, name: 'apple', calories: 95 },
        { id: 2, name: 'orange', calories: 45 },
        { id: 3, name: 'banana', calories: 105 },
        { id: 4, name: 'coconut', calories: 37 }
    ]
    //strings
    // fruits.sort((a, b) => a.name.localeCompare(b.name)) // normal sort  a--z
    // fruits.sort((a, b) => b.name.localeCompare(a.name)) // in reverse    z--a
    //Numbers
    // fruits.sort((a, b) => a.calories - b.calories) //normal
    // fruits.sort((a, b) => b.calories - a.calories) // in reverse

    // const newfilter = fruits.filter((f) => f.calories < 90)
    const newfilter = fruits.filter((f) => f.name.includes('o'))

    const newlist = newfilter.map((f) => <li>{f.name} - {f.calories}</li>)

    return (
        <>
            <ul>
                {newlist}
            </ul>
        </>
    )

}

export default App
