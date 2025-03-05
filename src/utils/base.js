const base = {
    get() {
        return {
            url : "http://localhost:8080/yaopinguanlixitong/",
            name: "yaopinguanlixitong",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/yaopinguanlixitong/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "医院药房管理系统"
        } 
    }
}
export default base
