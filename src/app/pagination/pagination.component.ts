import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { DataService } from "../data.service";

@Component({
  selector: "app-pagination",
  templateUrl: "./pagination.component.html",
  styleUrls: ["./pagination.component.css"],
})
export class PaginationComponent implements OnInit {
  start = 0;
  dataArray: Array<any> = [];
  collection: any = [];

  constructor(public dataService: DataService, private http: HttpClient) {
    for (let i = 1; i <= 100; i++) {
      this.collection.push(i);
    }
  }
  ngOnInit() {
    this.getData(2);
  }
  getData(val: any) {
    this.dataService.getDataService(val).subscribe((result: any) => {
      this.dataArray = result.data;
    });
  }

  change(event: any, pageNumber: any) {
    this.getData(pageNumber);
  }
}
