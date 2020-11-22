import React , {useEffect, useState} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { requestProjectDetail } from '../../redux/actions/listActions';
import './DetailComponent.css'
import { Link } from 'react-router-dom';

function ProjectDetail({ match, projectDetail, dispatch, actions }) {

const [id] = useState(match.params.id);
  useEffect(() => {
    if (id) {
      dispatch(requestProjectDetail(id));
    }
  }, [id, dispatch, actions]);
    console.log(projectDetail)

    debugger;
    return (

        <>
      
            {projectDetail &&
                <div className="detail-wrapper">
                    <h2 className="project_title">{projectDetail.projectName}</h2>
                    <ul>
                        <li className="project_info">{projectDetail.projectInfo}</li>
                        <li>Project owner: {projectDetail.projectOwner}</li>
                    </ul>
                    <img className="project_img" src={`${projectDetail.photo}`} alt=""/>
                    <button id="back-btn"><Link to= {`/`}>back</Link></button>
                </div>
            }
        </>
    );
}
function mapStateToProps(state) {
    debugger
    return {
        projectDetail: state.listReducers.projectDetail
    };
}
function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators({}, dispatch),
        dispatch
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(ProjectDetail);