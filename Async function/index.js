console.log("Hello");
console.log("Call login(username, password)) \nCorrect password is: AOTforever");

const login = async (userN, passW) => {
    if (!userN || !passW) {
        throw new Error ('Missing credentials');
    }
    if (passW === "AOTforever") {
        return 'Welcome';
    }
      throw new Error ('Wrong Password');
};
