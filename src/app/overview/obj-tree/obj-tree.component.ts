import { Component, OnInit } from '@angular/core';
import { ObjectService } from 'src/app/services/object.service';
import { NestedTreeControl } from '@angular/cdk/tree';
import { MatTreeNestedDataSource } from '@angular/material/tree';
import { Object, ObjectRef } from 'src/app/interfacess/object';

@Component({
  selector: 'app-obj-tree',
  templateUrl: './obj-tree.component.html',
  styleUrls: ['./obj-tree.component.scss']
})
export class ObjTreeComponent implements OnInit {

  treeControl = new NestedTreeControl<ObjectRef>(node => node.children);
  dataSource = new MatTreeNestedDataSource<ObjectRef>();

  constructor(private objctService: ObjectService) {
    this.dataSource.data = [objctService.getObjectHierarchy()];
  }

  ngOnInit(): void {
  }

  hasChild = (_: number, node: ObjectRef) => !!node.children && node.children.length > 0;
}
