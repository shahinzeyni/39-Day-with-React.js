import React, { useEffect, useState } from "react";

export default function App() {
  const [todos, setTodos] = useState([]);
  const [currentPage, setcurrentPage] = useState(1);
  const [paginated, setPaginated] = useState([]);

  let pageSize = 10;
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then(res => res.json())
      .then(datas => {
        setTodos(datas);
        // console.log(datas);
        let endIndex = pageSize * currentPage;
        let startIndex = endIndex - pageSize;
        let allShownTodos = datas.slice(startIndex, endIndex);
        setPaginated(allShownTodos);
      });
  }, []);

  const changePageBtn = page => {
    setcurrentPage(page);
    let endIndex = pageSize * currentPage;
    let startIndex = endIndex - pageSize;
    let allShownTodos = todos.slice(startIndex, endIndex);
    setPaginated(allShownTodos);
  };

  const pagesCount = Math.ceil(todos.length / pageSize);
  let pagesNumbers = Array.from(Array(pagesCount).keys());
  console.log(pagesNumbers);

  return (
    <div>
      {!todos
        ? "Loading"
        : <table className="table">
            <thead>
              <tr>
                <th>ID</th>
                <th>User ID</th>
                <th>Title</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {paginated.map(todo =>
                <tr key={todo.id}>
                  <td>
                    {todo.id}
                  </td>
                  <td>
                    {todo.userId}
                  </td>
                  <td>
                    {todo.title}
                  </td>
                  <td
                    className={
                      todo.completed ? "btn bg-danger" : "btn btn-success"
                    }
                  >
                    {todo.completed ? "Completed" : "Pending"}
                  </td>
                </tr>
              )}
            </tbody>
          </table>}

      <nav aria-label="...">
        <ul class="pagination pagination m-5 d-flex justify-content-center ">
          {pagesNumbers.map(page =>
            <li
              className={
                page + 1 === currentPage ? "page-item active" : "page-item"
              }
              aria-current="page"
              key={page.id}
              onClick={() => changePageBtn(page + 1)}
            >
              <span class="page-link">
                {page + 1}
              </span>
            </li>
          )}
        </ul>
      </nav>
    </div>
  );
}
