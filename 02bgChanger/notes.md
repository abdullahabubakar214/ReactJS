onClick Method want a function to be pass but not what function return.

- onClick={setColor("red")} // setColor return value to onClick Method which may be string or int but onClick want function.

- onClick={() => setColor("red")} // callBack function call setColor function
