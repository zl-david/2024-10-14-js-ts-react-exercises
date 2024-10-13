function App() {
  return (
    <>
      {/* 1. Create the ListView component and provide it with generics so that the type of items and their display is flexible. */}
      {/*
      <ListView
        items={[{ name: "Alice" }, { name: "Bob" }]}
        renderItem={(item) => <div>{item.name}</div>}
      />
      */}

      {/* 2. Define the FormInput component with a generic type that determines the type of the value. */}
      {/*
        <FormInput value="Hello" onChange={(value) => console.log(value)} />
        <FormInput value={10} onChange={(value) => console.log(value)} />
      */}

      {/* 3. Build the Table component with generics for the rows and make sure the columns work properly based on these generics. */}
      {/*
      <Table
        rows={[{ id: 1, name: "Alice" }, { id: 2, name: "Bob" }]}
        columns={[
          { header: "ID", accessor: (row) => row.id },
          { header: "Name", accessor: (row) => row.name },
        ]}
      />
      */}

      {/* 4. Build the Select component with generics so that the type of the options and the onChange callback are flexible. */}
      {/*
      <Select options={[{ id: 1, label: "Option 1" }, { id: 2, label: "Option 2" }]} getOptionLabel={(option) => option.label} onChange={(option) => console.log(option)} />
      */}

      {/* 5. Not an exercise on Generics, but an interesting pattern nevertheless. 
        Create a Button component that behaves differently based on different combinations of props. 
        The Button can be a regular button or a button that is a link, with respective props that match its type.

        Requirements:
        If the Button is given an href prop, it should be rendered as a link (<a>).
        If the Button is given an onClick prop, it should be rendered as a regular button (<button>).
        Passing both props should throw a TypeScript error.

      */}

      {/*
      <Button label="Click me" onClick={() => alert("Clicked!")} />
      <Button
        label="Go to Google"
        href="https://www.google.com"
        target="_blank"
      />
      */}
    </>
  );
}

export default App;
