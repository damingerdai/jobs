export interface ReposCommit {
    sha: string,
    message: string,
    author: {
        name: string,
        date: string,
    },
    committer: {
        name: string
    }
}

export type ReposCommits = ReposCommit[];