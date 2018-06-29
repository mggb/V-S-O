<?php

namespace App\Form;

use App\Entity\Planete;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\FileType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class PlaneteType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('nom')
            ->add('habitat')
            ->add('population')
            ->add('gravite')
            ->add('luminosite')
            ->add('duree')
            ->add('temperature')
            ->add('climat')
            ->add('techno')
            ->add('environnement')
            ->add('histoire')
            ->add('image', FileType::class)
            ->add('matricul')
        ;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => Planete::class,
        ]);
    }
}
