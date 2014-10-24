<?php
$this->breadcrumbs=array(
	'Mentor Sites'=>array('index'),
	$model->name,
);

$this->menu=array(
	array('label'=>'List MentorSite', 'url'=>array('index')),
	array('label'=>'Create MentorSite', 'url'=>array('create')),
	array('label'=>'Update MentorSite', 'url'=>array('update', 'id'=>$model->id)),
	array('label'=>'Delete MentorSite', 'url'=>'#', 'linkOptions'=>array('submit'=>array('delete','id'=>$model->id),'confirm'=>'Are you sure you want to delete this item?')),
	array('label'=>'Manage MentorSite', 'url'=>array('admin')),
);
?>

<h1>View MentorSite #<?php echo $model->id; ?></h1>

<?php $this->widget('zii.widgets.CDetailView', array(
	'data'=>$model,
	'attributes'=>array(
		'id',
		'name',
		'addtime',
		'updtime',
		'state',
	),
)); ?>
