import { useState, useEffect, useContext } from "react";
import FlatList from "flatlist-react/lib";
import { AuthContext } from "../context/userContext";

export function ListStudents() {
  const [listStudent, setListStudent] = useState([]);
  const { getStudentList, students } = useContext(AuthContext);
  renderStudentList = (students) => {
    return (
      <li key={students.id}>
        <b>{students.firstName} </b>
      </li>
    );
  };
  return (
    <ul>
      <FlatList
        list={this.props.students}
        renderItem={this.renderStudentList}
        renderWhenEmpty={() => <div>Nenhuma aluno cadastrado!</div>}
      />
    </ul>
  );
}
