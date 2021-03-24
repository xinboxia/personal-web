import React, {Component} from 'react'

class Songs extends Component {

    constructor(props) {
        super(props)
        this.state = {songs : []}
    }

    // 相当于useEffect，这个是第一次render完成之后，发生的事情，然后改变state后，重新render页面
    componentDidMount() {
        fetch('http://localhost:8080/api/songs')
        .then((response) => response.json())
        .then(responseData => {
            this.setState({
                songs: responseData._embedded.songs,
            });
        })
        .catch(err => console.error(err))
    }

    render()  {
        
        const trows = this.state.songs.map((songs, index) => 
            <tr key={index}>
                <td>{songs.artistName}</td><br/>
                <td>{songs.songName}</td><br/>
                <td>{songs.songGenre}</td>
            </tr>
        )

        return (
            <div className='songs'>
                <table>
                    <tbody>{trows}</tbody>
                </table>
            </div>
        )
    }
}

export default Songs
