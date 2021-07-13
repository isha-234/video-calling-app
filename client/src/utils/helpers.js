//for showing time on the video call page
import moment from 'moment';

export const formatDate = (timestamp) => {
    return moment(timestamp).format("h:mm A");
}