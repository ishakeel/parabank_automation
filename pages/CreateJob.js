import {JOBS_SELECTOR} from  '../common/constants';

const clickCreateJob = () => cy.get(JOBS_SELECTOR.createJobButton).click();


export default {
    clickCreateJob
};
