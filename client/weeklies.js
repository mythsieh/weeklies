angular.module('weeklies', [])
  .controller('TableController', function($scope, Tasks){
    angular.extend($scope, Tasks);
  })
  .factory('Tasks', function($http){
    var tasks = [
      {
        name: 'Walk Sebastian',
        sunday: 0,
        monday: 0,
        tuesday: 1,
        wednesday: 1,
        thursday: 2,
        friday: 2,
        saturday: 1
      }
    ];

    // when landing on the page, get all tasks and show them
    $http.get('/api/tasks')
      .success(function(data){
        console.log('i am in http get: ', data);
      })
      .error(function(data){
        console.log('Error: ' + data);
      });
    
    var addTask = function(task){
      var obj = {
        name: task,
        sunday: 0,
        monday: 0,
        tuesday: 0,
        wednesday: 0,
        thursday: 0,
        friday: 0,
        saturday: 0
      };
      tasks.push(obj);
    };
    
    var updateDay = function(value){
      if (typeof value === 'number'){
        if (this.value < 2){
          this.value++;
        } else {
          this.value = 0;
        }
      }
    }
    
    var dayClicked = function($index){
      console.log($index);
    }
    return {
      tasks: tasks,
      addTask: addTask,
      updateDay: updateDay,
      dayClicked: dayClicked
    }
  });
