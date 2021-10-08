import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-todo",
  templateUrl: "./todo.component.html",
  styleUrls: ["./todo.component.css"],
})
export class TodoComponent implements OnInit {
  syllabusForm: any = FormGroup;
  finalArray: any = [];
  updateIndex: any = -1;
  constructor(
    private fbuild: FormBuilder,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  buildForm() {
    this.syllabusForm = this.fbuild.group({
      firstName: "",
      lastName: "",
      email: "",
    });
  }
  ngOnInit(): void {
    this.buildForm();
    let tempArray: any = localStorage.getItem("data");
    if (tempArray && tempArray !== null) {
      this.finalArray = JSON.parse(tempArray);
    }
  }
  submit() {
    if (this.syllabusForm.valid) {
      if (this.updateIndex === -1) {
        this.finalArray.push(this.syllabusForm.value);
        this.resetValue();
      } else {
        this.finalArray[this.updateIndex] = this.syllabusForm.value;
        this.resetValue();
        this.updateIndex = -1;
      }
    } else {
    }
  }
  edit(i: any) {
    this.updateIndex = i;
    this.syllabusForm.patchValue({
      firstName: this.finalArray[i].firstName,
      lastName: this.finalArray[i].lastName,
      email: this.finalArray[i].email,
    });
  }
  delete(j: any) {
    this.finalArray.pop(j);
  }
  resetValue() {
    this.syllabusForm.patchValue({
      firstName: "",
      lastName: "",
      email: "",
    });
  }
  localStorage() {
    localStorage.setItem("data", JSON.stringify(this.finalArray));
  }

  pagination() {
    this.router.navigate(["../pagination"], { relativeTo: this.route });
  }
}
