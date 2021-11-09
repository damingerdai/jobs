import React from "react";
import ReactDOM from "react-dom";

interface ReposState {
  commits: {
    sha: string,
    message: string,
    author: {
      name: string,
      date: string,
    },
    committer: {
      name: string
    }
  }[],
} 

export default class Repos extends React.Component<any, ReposState> {
  constructor(props: any) {
    super(props);
    this.state = {
      commits: [],
    };
  }

  async componentDidMount() {
    const url = "/api/v1/repos/commits";
    const response = await (await fetch(url)).json();
    const commits = response.map((res: { sha: any; commit: any; }) => {
      return {
        sha: res.sha,
        ...res.commit
      }
    });
    this.setState({ commits });
  }

  render() {
    return (
      <div className="container">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Message</th>
              <th scope="col">Author</th>
              <th scope="col">Committer</th>
              <th scope="col">Date</th>
            </tr>
          </thead>
          <tbody>
            {this.state.commits.map((commit, i) => {
              // console.log(commit);
              return (
                <tr key={commit.sha}>
                  <th scope="row">{i + 1}</th>
                  <td>{commit.message}</td>
                  <td>{commit.author.name}</td>
                  <td>{commit.committer.name}</td>
                  <td>{commit.author.date}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}