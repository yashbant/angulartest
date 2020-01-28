import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  groupByLogic = function(xs, key) {
    return xs.reduce(function(rv, x) {
      (rv[x[key]] = rv[x[key]] || []).push(x);
      return rv;
    }, {});
  };

  public collapseInitial = false;
  public msgCollapseInitial = {
      "collapse show": this.collapseInitial,
      "collapse": !this.collapseInitial
  }
  data = [
  {
      "group_id": 3,
      "group_name": "Organization",
      "group_code": "org",
      "api_id": 1,
      "api_path": "api/organization/get_all",
      "is_selected": 1
  },
  {
      "group_id": 3,
      "group_name": "Organization",
      "group_code": "org",
      "api_id": 2,
      "api_path": "api/organization/get_by_id",
      "is_selected": 0
  },
  {
      "group_id": 3,
      "group_name": "Organization",
      "group_code": "org",
      "api_id": 3,
      "api_path": "api/organization/duplicate_name",
      "is_selected": 0
  },
  {
      "group_id": 3,
      "group_name": "Organization",
      "group_code": "org",
      "api_id": 4,
      "api_path": "api/organization/duplicate_code",
      "is_selected": 0
  },
  {
      "group_id": 3,
      "group_name": "Organization",
      "group_code": "org",
      "api_id": 5,
      "api_path": "api/organization/insert",
      "is_selected": 0
  },
  {
      "group_id": 3,
      "group_name": "Organization",
      "group_code": "org",
      "api_id": 6,
      "api_path": "api/organization/update",
      "is_selected": 0
  },
  {
      "group_id": 3,
      "group_name": "Organization",
      "group_code": "org",
      "api_id": 7,
      "api_path": "api/organization/delete",
      "is_selected": 0
  },
  {
      "group_id": 3,
      "group_name": "Organization",
      "group_code": "org",
      "api_id": 8,
      "api_path": "api/organization/active",
      "is_selected": 0
  },
  {
      "group_id": 3,
      "group_name": "Organization",
      "group_code": "org",
      "api_id": 9,
      "api_path": "api/organization/inactive",
      "is_selected": 0
  },
  {
      "group_id": 3,
      "group_name": "Organization",
      "group_code": "org",
      "api_id": 10,
      "api_path": "api/organization/organization_role_map",
      "is_selected": 0
  },
  {
      "group_id": 3,
      "group_name": "Organization",
      "group_code": "org",
      "api_id": 11,
      "api_path": "api/organization/organization_user_map",
      "is_selected": 0
  },
  {
      "group_id": 3,
      "group_name": "Organization",
      "group_code": "org",
      "api_id": 12,
      "api_path": "api/organization_license/get_all",
      "is_selected": 0
  },
  {
      "group_id": 3,
      "group_name": "Organization",
      "group_code": "org",
      "api_id": 13,
      "api_path": "api/organization_license/get_by_id",
      "is_selected": 0
  },
  {
      "group_id": 3,
      "group_name": "Organization",
      "group_code": "org",
      "api_id": 14,
      "api_path": "api/organization_license/insert",
      "is_selected": 0
  },
  {
      "group_id": 3,
      "group_name": "Organization",
      "group_code": "org",
      "api_id": 19,
      "api_path": "api/organization_license/update",
      "is_selected": 0
  },
  {
      "group_id": 3,
      "group_name": "Organization",
      "group_code": "org",
      "api_id": 20,
      "api_path": "api/organization_license/delete",
      "is_selected": 0
  },
  {
      "group_id": 3,
      "group_name": "Organization",
      "group_code": "org",
      "api_id": 21,
      "api_path": "api/organization_license/active",
      "is_selected": 0
  },
  {
      "group_id": 3,
      "group_name": "Organization",
      "group_code": "org",
      "api_id": 22,
      "api_path": "api/organization_license/inactive",
      "is_selected": 0
  },
  {
      "group_id": 5,
      "group_name": "Role",
      "group_code": "rol",
      "api_id": 23,
      "api_path": "api/role/get_all",
      "is_selected": 0
  },
  {
      "group_id": 5,
      "group_name": "Role",
      "group_code": "rol",
      "api_id": 24,
      "api_path": "api/role/get_by_id",
      "is_selected": 0
  },
  {
      "group_id": 5,
      "group_name": "Role",
      "group_code": "rol",
      "api_id": 25,
      "api_path": "api/role/duplicate_name",
      "is_selected": 0
  },
  {
      "group_id": 5,
      "group_name": "Role",
      "group_code": "rol",
      "api_id": 26,
      "api_path": "api/role/insert",
      "is_selected": 0
  },
  {
      "group_id": 5,
      "group_name": "Role",
      "group_code": "rol",
      "api_id": 27,
      "api_path": "api/role/update",
      "is_selected": 0
  },
  {
      "group_id": 5,
      "group_name": "Role",
      "group_code": "rol",
      "api_id": 28,
      "api_path": "api/role/delete",
      "is_selected": 0
  },
  {
      "group_id": 5,
      "group_name": "Role",
      "group_code": "rol",
      "api_id": 29,
      "api_path": "api/role/active",
      "is_selected": 0
  },
  {
      "group_id": 5,
      "group_name": "Role",
      "group_code": "rol",
      "api_id": 30,
      "api_path": "api/role/inactive",
      "is_selected": 0
  },
  {
      "group_id": 5,
      "group_name": "Role",
      "group_code": "rol",
      "api_id": 15,
      "api_path": "api/role/api_details",
      "is_selected": 0
  },
  {
      "group_id": 5,
      "group_name": "Role",
      "group_code": "rol",
      "api_id": 32,
      "api_path": "api/role/role_api_map",
      "is_selected": 0
  },
  {
      "group_id": 6,
      "group_name": "Sponsor",
      "group_code": "spo",
      "api_id": 33,
      "api_path": "api/sponsor/duplicate_name",
      "is_selected": 0
  },
  {
      "group_id": 6,
      "group_name": "Sponsor",
      "group_code": "spo",
      "api_id": 34,
      "api_path": "api/sponsor/duplicate_code",
      "is_selected": 0
  },
  {
      "group_id": 6,
      "group_name": "Sponsor",
      "group_code": "spo",
      "api_id": 35,
      "api_path": "api/sponsor/insert",
      "is_selected": 0
  },
  {
      "group_id": 6,
      "group_name": "Sponsor",
      "group_code": "spo",
      "api_id": 36,
      "api_path": "api/sponsor/update",
      "is_selected": 0
  },
  {
      "group_id": 6,
      "group_name": "Sponsor",
      "group_code": "spo",
      "api_id": 37,
      "api_path": "api/sponsor/delete",
      "is_selected": 0
  },
  {
      "group_id": 6,
      "group_name": "Sponsor",
      "group_code": "spo",
      "api_id": 38,
      "api_path": "api/sponsor/active",
      "is_selected": 0
  },
  {
      "group_id": 6,
      "group_name": "Sponsor",
      "group_code": "spo",
      "api_id": 39,
      "api_path": "api/sponsor/inactive",
      "is_selected": 0
  },
  {
      "group_id": 6,
      "group_name": "Sponsor",
      "group_code": "spo",
      "api_id": 40,
      "api_path": "api/sponsor/sponsor_organization_map",
      "is_selected": 0
  },
  {
      "group_id": 6,
      "group_name": "Sponsor",
      "group_code": "spo",
      "api_id": 41,
      "api_path": "api/sponsor/sponsor_role_map",
      "is_selected": 0
  },
  {
      "group_id": 6,
      "group_name": "Sponsor",
      "group_code": "spo",
      "api_id": 42,
      "api_path": "api/sponsor/sponsor_user_map",
      "is_selected": 0
  },
  {
      "group_id": 6,
      "group_name": "Sponsor",
      "group_code": "spo",
      "api_id": 16,
      "api_path": "api/sponsor/get_all",
      "is_selected": 0
  },
  {
      "group_id": 6,
      "group_name": "Sponsor",
      "group_code": "spo",
      "api_id": 17,
      "api_path": "api/sponsor/get_by_id",
      "is_selected": 0
  },
  {
      "group_id": 7,
      "group_name": "User",
      "group_code": "us",
      "api_id": 18,
      "api_path": "api/user/get_all",
      "is_selected": 0
  },
  {
      "group_id": 7,
      "group_name": "User",
      "group_code": "us",
      "api_id": 43,
      "api_path": "api/user/duplicate_user_name",
      "is_selected": 0
  },
  {
      "group_id": 7,
      "group_name": "User",
      "group_code": "us",
      "api_id": 44,
      "api_path": "api/user/insert",
      "is_selected": 0
  },
  {
      "group_id": 7,
      "group_name": "User",
      "group_code": "us",
      "api_id": 45,
      "api_path": "api/user/update",
      "is_selected": 0
  },
  {
      "group_id": 7,
      "group_name": "User",
      "group_code": "us",
      "api_id": 46,
      "api_path": "api/user/delete",
      "is_selected": 0
  },
  {
      "group_id": 7,
      "group_name": "User",
      "group_code": "us",
      "api_id": 47,
      "api_path": "api/user/active",
      "is_selected": 0
  },
  {
      "group_id": 7,
      "group_name": "User",
      "group_code": "us",
      "api_id": 48,
      "api_path": "api/user/inactive",
      "is_selected": 0
  },
  {
      "group_id": 7,
      "group_name": "User",
      "group_code": "us",
      "api_id": 49,
      "api_path": "api/user/user_role_map",
      "is_selected": 0
  },
  {
      "group_id": 7,
      "group_name": "User",
      "group_code": "us",
      "api_id": 31,
      "api_path": "api/user/get_by_id",
      "is_selected": 0
  },
  {
      "group_id": 8,
      "group_name": "Studies",
      "group_code": "stu",
      "api_id": 50,
      "api_path": "api/study/get_all",
      "is_selected": 0
  },
  {
      "group_id": 8,
      "group_name": "Studies",
      "group_code": "stu",
      "api_id": 51,
      "api_path": "api/study/get_by_id",
      "is_selected": 0
  },
  {
      "group_id": 8,
      "group_name": "Studies",
      "group_code": "stu",
      "api_id": 52,
      "api_path": "api/study/duplicate_name",
      "is_selected": 0
  },
  {
      "group_id": 8,
      "group_name": "Studies",
      "group_code": "stu",
      "api_id": 53,
      "api_path": "api/study/duplicate_code",
      "is_selected": 0
  },
  {
      "group_id": 8,
      "group_name": "Studies",
      "group_code": "stu",
      "api_id": 54,
      "api_path": "api/study/insert",
      "is_selected": 0
  },
  {
      "group_id": 8,
      "group_name": "Studies",
      "group_code": "stu",
      "api_id": 55,
      "api_path": "api/study/update",
      "is_selected": 0
  },
  {
      "group_id": 8,
      "group_name": "Studies",
      "group_code": "stu",
      "api_id": 56,
      "api_path": "api/study/delete",
      "is_selected": 0
  },
  {
      "group_id": 8,
      "group_name": "Studies",
      "group_code": "stu",
      "api_id": 57,
      "api_path": "api/study/active",
      "is_selected": 0
  },
  {
      "group_id": 8,
      "group_name": "Studies",
      "group_code": "stu",
      "api_id": 58,
      "api_path": "api/study/inactive",
      "is_selected": 0
  },
  {
      "group_id": 8,
      "group_name": "Studies",
      "group_code": "stu",
      "api_id": 59,
      "api_path": "api/study/study_sponsor_map",
      "is_selected": 0
  },
  {
      "group_id": 8,
      "group_name": "Studies",
      "group_code": "stu",
      "api_id": 60,
      "api_path": "api/study/study_role_map",
      "is_selected": 0
  },
  {
      "group_id": 8,
      "group_name": "Studies",
      "group_code": "stu",
      "api_id": 61,
      "api_path": "api/study/study_user_map",
      "is_selected": 0
  }
];
  selectedAll: any;
  tried: any = 0;
  groupedData = this.groupByLogic(this.data, 'group_id');
  groupedData1 = JSON.stringify(this.groupedData, this.tried, 4);

  constructor() {
    console.log(this.groupedData1)            
  } 
//   selectAll() {
//       for (var i = 0; i < this.groupedData1[i].length; i++) {
//       this.groupedData1[][i].is_selected = this.selectedAll;
//       }
//   }
//   checkIfAllSelected() {
//       this.selectedAll = this.groupedData1[].every(function(item:any) {
//           return item.is_selected == true;
//       });
//   }
}
