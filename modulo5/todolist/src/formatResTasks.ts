import { responseFormatDate } from "./dateValidation";

type tasksResSQL = {
    id: string,
    title: string,
    description: string,
    status: string,
    limit_date: string,
    creator_user_id: string,
    nickname: string
};

type tasksFinalResponse = {
    taskId: string,
    title: string,
    description: string,
    limitDate: string,
    status: string,
    creatorUserId: string,
    creatorUserNickname: string
};

type Users = {
    id: string,
    nickname: string
};

type oneTasksFinalResponse = {
    taskId: string,
    title: string,
    description: string,
    limitDate: string,
    status: string,
    creatorUserId: string,
    creatorUserNickname: string,
    responsibleUsers: Users[]
};

type oneTaskResSQL = {
    id: string,
    title: string,
    description: string,
    status: string,
    limit_date: string,
    creator_user_id: string,
    creatorUserNickname: string,
    responsible_id: string,
    responsible_nick: string
};

export const formatResponseTasks = (tasksList: tasksResSQL[]): tasksFinalResponse[] =>{    
    const formatedTasks = tasksList.map(task  => {
        const formatedDate = responseFormatDate(task.limit_date);
        return {
           taskId: task.id,
           title: task.title,
           description: task.description,
           limitDate: formatedDate,
           status: task.status,
           creatorUserId: task.creator_user_id,
           creatorUserNickname: task.nickname
        }
     });

     return formatedTasks;
};

export const formatResponseOneTask = (tasksList: oneTaskResSQL[]): oneTasksFinalResponse =>{     
    const formatedDate = responseFormatDate(tasksList[0].limit_date);
    
    const initialFormatedTask = {
        taskId: tasksList[0].id,
        title: tasksList[0].title,
        description: tasksList[0].description,
        limitDate: formatedDate,
        status: tasksList[0].status,
        creatorUserId: tasksList[0].creator_user_id,
        creatorUserNickname: tasksList[0].creatorUserNickname,
    };
    
    const responsibleUsersArr = tasksList.map(task  => {
        return {
            id: task.responsible_id,
            nickname: task.responsible_nick
        }
    });

    const finalFormatedTask = {
        ...initialFormatedTask,
        responsibleUsers: responsibleUsersArr 
    }
    

     return finalFormatedTask;
}; 
