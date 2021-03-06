(function() {
  'use strict';

  angular.module('mytodo')
    .controller('RegisterController', ['UserService','$routeParams', function (UserService, $routeParams) {
      var vm = this;
      vm.users = [];
      vm.formData = {};
      var userId = $routeParams.user_id;
      vm.userId = $routeParams.user_id;
      
      //REGISTER A NEW USER
      vm.register = function () {
        console.log('vm.formData', vm.formData);        
        console.log('vm.formData.initals', vm.formData.initials);      
        UserService.register(vm.formData)
          .then(function (data){
            vm.users.push(data);
            var successRegister = document.getElementById('successRegister');
            successRegister.innerHTML = 'Congrats' + vm.formData.initials + ' ,You have successfully created your account. Click back to login';
            successRegister.style.display = 'block';
          })
          .catch(function(err) {
          console.log('createdUser error: ' + err);
        });
          console.log('created vm.users: ', vm.users);
      };
    }]);
})();