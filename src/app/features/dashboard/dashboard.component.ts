import {
  Component,
  OnInit,
  ViewChildren,
  QueryList,
  Input,
  Output,
  EventEmitter,
  Directive,
} from '@angular/core';
import { MovieService } from '../../services/movie.service';
import { Movie } from 'src/app/core/models/movie.model';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from '../components/modal/modal.component';

export type SortColumn = keyof Movie[] | '';
export type SortDirection = 'asc' | 'desc' | '';
const rotate: { [key: string]: SortDirection } = {
  asc: 'desc',
  desc: '',
  '': 'asc',
};

const compare = (v1: string | number, v2: string | number) =>
  v1 < v2 ? -1 : v1 > v2 ? 1 : 0;

export interface SortEvent {
  column: SortColumn;
  direction: SortDirection;
}

@Directive({
  selector: 'th[sortable]',
  host: {
    '[class.asc]': 'direction === "asc"',
    '[class.desc]': 'direction === "desc"',
    '(click)': 'rotate()',
  },
})
export class NgbdSortableHeader {
  @Input() sortable: SortColumn = '';
  @Input() direction: SortDirection = '';
  @Output() sort = new EventEmitter<SortEvent>();

  rotate() {
    this.direction = rotate[this.direction];
    this.sort.emit({ column: this.sortable, direction: this.direction });
  }
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader>;
  movies: Movie[];
  closeResult: string = '';
  collectionSize: number;
  constructor(
    private movieService: MovieService,
    private modalService: NgbModal
  ) {}

  ngOnInit(): void {
    this.getPopularMovies().subscribe((res) => {
      this.collectionSize = res.length;
      this.movies = res;
    });
  }

  getPopularMovies() {
    return this.movieService.getPopularMovies();
  }

  onSort({ column, direction }: SortEvent) {
    this.headers.forEach((header) => {
      if (header.sortable !== column) {
        header.direction = '';
      }
    });

    if (direction === '' || column === '') {
      this.movies = this.movies;
    } else {
      this.movies = [...this.movies].sort((a, b) => {
        const res = compare(a[column], b[column]);

        return direction === 'asc' ? res : -res;
      });
    }
  }

  open(movie) {
    const modalRef = this.modalService.open(ModalComponent, {
      ariaLabelledBy: 'modal-basic-title',
    });
    modalRef.componentInstance.movie = movie;
  }
}
