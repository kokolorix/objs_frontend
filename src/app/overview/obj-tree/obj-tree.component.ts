import { Component, OnInit } from '@angular/core';
import { ObjectService } from 'src/app/services/object.service';
import { NestedTreeControl } from '@angular/cdk/tree';
import { MatTreeNestedDataSource } from '@angular/material/tree';
import { IObject, IObjectRef } from 'src/app/interfacess/object';

@Component({
  selector: 'app-obj-tree',
  templateUrl: './obj-tree.component.html',
  styleUrls: ['./obj-tree.component.scss']
})
export class ObjTreeComponent implements OnInit {

  treeControl = new NestedTreeControl<IObjectRef>(node => node.children);
  dataSource = new MatTreeNestedDataSource<IObjectRef>();

  constructor(private objctService: ObjectService) {
    this.dataSource.data = [objctService.getObjectHierarchy()];
  }

  ngOnInit(): void {
  }

  hasChild = (_: number, node: IObjectRef) => !!node.children && node.children.length > 0;
}
