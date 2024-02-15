export const createChallenge = async (id, boost, target) => {
    
    // check 
    const checkChallenge = async (id, target) => {
        // is the challenger in an active challenge?
        // is there an active challenge on the target?
        return true
    };

    // createChallenge 
    let checkComplete = await checkChallenge(id, target); 

    if (!checkComplete) {
        /*
        1. return data to frame
        2. queue in redis
        3. unless there's error
        4. send to posting service
        */
    }
};

export const acceptChallenge = async (id, boost, target) => {
    // check 
    const checkChallenge = async (id) => {
        // is the challenger in an active challenge?
        // is there an active challenge on the target?
        return true
    };

    let checkComplete = await checkChallenge(id); 

    if (!checkComplete) {
        /*
        1. return data to frame
        2. queue in redis
        3. unless there's error, get back matchup ID
        4. send to posting service
        */
    }

}