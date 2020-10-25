import React from 'react'
import { getUser } from '../../lib/api'

class Subaccount extends React.Component {
  state = {
    profile: {},
    subaccounts: {}
  }

  async componentDidMount() {
    const getData = await getUser()
    console.log(getData)
    this.setState({
      profile: getData.data,
      subaccounts: getData.data.subaccounts
    })
  }


  render() {
    return (
      <div>test</div>
    )
  }
}

export default Subaccount