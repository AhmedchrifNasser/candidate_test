import { Component, Injectable, OnInit, ViewChild } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { Annotation, NgxAnnotateTextComponent } from 'ngx-annotate-text';
import {HttpClient} from '@angular/common/http';
import { ExportService } from './export.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[ExportService]
})
export class AppComponent implements OnInit {
  
constructor(private ExportService:ExportService){}
anote: any;
  ngOnInit(){
    this.anote= {
      document: "",
      annotation: ""
    }

  }
  
  labels : String[] = [];
  selectedLabel!: string;
  ColorLabel = new Map().set("","");
  text!: string;
  str: string = "";
  
  
  addtext(){
    this.text=(<HTMLInputElement>document.getElementById("text")).value;
  } 



  @ViewChild('annotateText') ngxAnnotateText: NgxAnnotateTextComponent | undefined;

  annotations: Annotation[] = [
    
  ];

  addAnnotation(label: string, color: string) {
    if (this.ngxAnnotateText) {
      const selection = this.ngxAnnotateText.getCurrentTextSelection();
      if (selection) {
        this.annotations = this.annotations.concat(
          new Annotation(
            selection.startIndex,
            selection.endIndex,
            label,
            color,
          ),
        );
      }
    }
    console.log(this.annotations)
  }
  createjson(a:any,b:Annotation[]){
    var Json = {
      "document": a,
      "annotation": ""
    }
    b.forEach(anot => {
    this.str = this.str.concat("{start:",anot.startIndex.toString(),",","end:",anot.endIndex.toString(),",","label:",anot.label.toString(),",","text:",anot.text,"}");
    });
    Json.annotation = Json.annotation.concat(this.str)
    console.log(Json)
    this.ExportService.createjsondoc(Json).subscribe(
      response => {
        alert ("Exported !")
      }
    )
  }
  addLabel(label: any) {
    this.labels.push(label.value) ;
    this.ColorLabel.set(label.value,this.getRandomColor());
    label.value = '';
    console.log(this.ColorLabel);
  }

  selectLabel(label: any) {
    this.selectedLabel = label;

  }

getRandomColor() {
  var color = Math.floor(0x1000000 * Math.random()).toString(16);
  return '#' + ('000000' + color).slice(-6);
}



}


