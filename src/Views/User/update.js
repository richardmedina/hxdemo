// import UserEdit from './edit';
// import { mapStateToProps, mapDispatchToProps } from '../../Mappers/UserMapper';
// import { connect } from 'react-redux';


// class UserUpdate extends UserEdit  {
    
//     constructor (props)
//     {
//         super ();        
//         console.log ("update props ctor: " + JSON.stringify(props));

//         let p = props.location.extraProps;

//         if (p && p.item !== "undefined") 
//         {
//             this.state = {...p, okButtonText: 'Update'};
//         } else 
//         {
//             this.state = {
//                 user: {
//                     id : '',
//                     first_name: '',
//                     last_name: '',
//                     avatar: '',
//                 },
//                 okButtonText: 'Create'
//             };
//         }
//     }
// }

// export default connect (mapStateToProps, mapDispatchToProps) (UserUpdate); 

// //export default UserUpdate;