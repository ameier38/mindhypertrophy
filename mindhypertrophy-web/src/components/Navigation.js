import React, { Component, PropTypes } from 'react'
import SideNavigation from './SideNavigation'
import BottomNavigation from './BottomNavigation'
import SearchModal from './SearchModal'

const $ = window.$;
const modalTarget = 'searchModal'

class Navigation extends Component {
    constructor(props){
        super(props);
        this.state = {
            modalOpen: false
        }
        this.handleFindClick = this.handleFindClick.bind(this)
    }
    componentDidMount() {
        $('.modal').modal({
            ready: () => this.setState({modalOpen: true}),
            complete: () => this.setState({modalOpen: false})
        })
    }
    handleFindClick() {
        if (this.state.modalOpen) {
            $(`#${modalTarget}`).modal('close')
            this.setState({modalOpen: false})
        }
        else {
            $(`#${modalTarget}`).modal('open')
            this.setState({modalOpen: true})
        }
    }
    render() {
        const { 
            toggleTag, clearTags, 
            tags, pushArticle 
        } = this.props
        return (
            <div className="Navigation">
                <SideNavigation 
                    onFindClick={this.handleFindClick}
                    pushArticle={pushArticle} 
                    toggleTag={toggleTag}
                    clearTags={clearTags} />
                <BottomNavigation 
                    onFindClick={this.handleFindClick}
                    pushArticle={pushArticle} 
                    toggleTag={toggleTag}
                    clearTags={clearTags} />
                <SearchModal 
                    target={modalTarget} 
                    toggleTag={toggleTag} 
                    clearTags={clearTags}
                    tags={tags} />
            </div>
        )
    }
}

Navigation.propTypes = {
    pushArticle: PropTypes.func.isRequired,
    toggleTag: PropTypes.func.isRequired,
    clearTags: PropTypes.func.isRequired,
    tags: PropTypes.array.isRequired
}

export default Navigation